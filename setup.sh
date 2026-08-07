#!/usr/bin/env bash
# jobd-ai — local machine setup
#
# Use this if you're NOT in a Codespace/devcontainer — e.g. running jobd-ai
# directly on your own Mac/Linux box. Installs the same tools the devcontainer
# gives you for free, so `docker compose up` behaves identically everywhere.
#
# Usage:
#   ./setup.sh check        # show what's missing, install nothing
#   ./setup.sh docker       # Docker + Compose
#   ./setup.sh python       # Python 3.12 + venv
#   ./setup.sh claude       # Claude Code CLI
#   ./setup.sh aws          # AWS CLI v2
#   ./setup.sh terraform    # Terraform
#   ./setup.sh gh           # GitHub CLI
#   ./setup.sh all          # everything above
#   ./setup.sh project      # venv + pip install -e '.[dev]' (run after 'all')

set -euo pipefail

OS="$(uname -s)"
ARCH="$(uname -m)"
IS_MAC=false; IS_LINUX=false
[[ "$OS" == "Darwin" ]] && IS_MAC=true
[[ "$OS" == "Linux" ]] && IS_LINUX=true

log()  { echo -e "\033[1;36m==>\033[0m $*"; }
warn() { echo -e "\033[1;33m!!\033[0m $*"; }
have() { command -v "$1" >/dev/null 2>&1; }

require_brew() {
  if ! have brew; then
    log "Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    eval "$(/opt/homebrew/bin/brew shellenv 2>/dev/null || /usr/local/bin/brew shellenv)"
  fi
}

install_docker() {
  if have docker; then log "Docker already installed ($(docker --version))"; return; fi
  if $IS_MAC; then
    require_brew
    log "Installing Docker Desktop via brew cask..."
    brew install --cask docker
    warn "Open Docker Desktop once manually to finish setup and start the daemon."
  elif $IS_LINUX; then
    log "Installing Docker Engine (official convenience script)..."
    curl -fsSL https://get.docker.com | sh
    sudo usermod -aG docker "$USER"
    warn "Log out/in (or 'newgrp docker') for group membership to take effect."
  else
    warn "Unsupported OS for auto-install. See https://docs.docker.com/get-docker/"
  fi
}

install_python() {
  if have python3 && python3 -c 'import sys; exit(0 if sys.version_info >= (3,12) else 1)' 2>/dev/null; then
    log "Python 3.12+ already installed ($(python3 --version))"
    return
  fi
  if $IS_MAC; then
    require_brew
    log "Installing Python 3.12 via brew..."
    brew install python@3.12
  elif $IS_LINUX; then
    log "Installing Python 3.12 via apt (deadsnakes if needed)..."
    if ! apt-cache show python3.12 >/dev/null 2>&1; then
      sudo apt-get update -qq
      sudo apt-get install -y -qq software-properties-common
      sudo add-apt-repository -y ppa:deadsnakes/ppa
    fi
    sudo apt-get update -qq
    sudo apt-get install -y -qq python3.12 python3.12-venv python3-pip
  fi
}

install_claude() {
  if have claude; then log "Claude Code already installed ($(claude --version))"; return; fi
  log "Installing Claude Code CLI..."
  curl -fsSL https://claude.ai/install.sh | bash
  warn "Restart your shell (or 'source ~/.bashrc'/'~/.zshrc'), then run 'claude' to authenticate."
}

install_aws() {
  if have aws; then log "AWS CLI already installed ($(aws --version))"; return; fi
  log "Installing AWS CLI v2..."
  if $IS_MAC; then
    curl -fsSL "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o /tmp/AWSCLIV2.pkg
    sudo installer -pkg /tmp/AWSCLIV2.pkg -target /
  elif $IS_LINUX; then
    local url="https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip"
    [[ "$ARCH" == "aarch64" || "$ARCH" == "arm64" ]] && url="https://awscli.amazonaws.com/awscli-exe-linux-aarch64.zip"
    curl -fsSL "$url" -o /tmp/awscliv2.zip
    (cd /tmp && unzip -oq awscliv2.zip && sudo ./aws/install --update)
  fi
}

install_terraform() {
  if have terraform; then log "Terraform already installed ($(terraform --version | head -1))"; return; fi
  log "Installing Terraform..."
  if $IS_MAC; then
    require_brew
    brew tap hashicorp/tap
    brew install hashicorp/tap/terraform
  elif $IS_LINUX; then
    sudo apt-get update -qq
    sudo apt-get install -y -qq gnupg software-properties-common wget lsb-release
    wget -qO- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
    echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | \
      sudo tee /etc/apt/sources.list.d/hashicorp.list >/dev/null
    sudo apt-get update -qq
    sudo apt-get install -y -qq terraform
  fi
}

install_gh() {
  if have gh; then log "GitHub CLI already installed ($(gh --version | head -1))"; return; fi
  log "Installing GitHub CLI..."
  if $IS_MAC; then
    require_brew
    brew install gh
  elif $IS_LINUX; then
    sudo apt-get update -qq
    sudo apt-get install -y -qq curl
    curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | \
      sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | \
      sudo tee /etc/apt/sources.list.d/github-cli.list >/dev/null
    sudo apt-get update -qq
    sudo apt-get install -y -qq gh
  fi
}

setup_project() {
  log "Creating virtualenv and installing project (editable, dev extras)..."
  python3.12 -m venv .venv 2>/dev/null || python3 -m venv .venv
  # shellcheck disable=SC1091
  source .venv/bin/activate
  pip install --upgrade pip
  pip install -e '.[dev]' || warn "pyproject.toml not found yet — skip until scaffold exists (Milestone 2)."
  log "Activate with: source .venv/bin/activate"
}

check() {
  log "Checking local environment..."
  for tool in docker "docker compose" python3 claude aws terraform gh; do
    if have "${tool%% *}"; then
      echo "  [x] $tool"
    else
      echo "  [ ] $tool  (missing)"
    fi
  done
  echo
  echo "Run: ./setup.sh all      # install everything missing"
  echo "     ./setup.sh project  # venv + pip install -e '.[dev]'"
}

case "${1:-}" in
  check)     check ;;
  docker)    install_docker ;;
  python)    install_python ;;
  claude)    install_claude ;;
  aws)       install_aws ;;
  terraform) install_terraform ;;
  gh)        install_gh ;;
  project)   setup_project ;;
  all)
    install_docker
    install_python
    install_claude
    install_aws
    install_terraform
    install_gh
    log "Done. Next: ./setup.sh project, then 'docker compose up -d db' and 'jobd --help'."
    ;;
  "")
    log "No argument given — defaulting to 'all'."
    install_docker
    install_python
    install_claude
    install_aws
    install_terraform
    install_gh
    log "Done. Next: ./setup.sh project, then 'docker compose up -d db' and 'jobd --help'."
    ;;
  *)
    echo "usage: ./setup.sh {check|docker|python|claude|aws|terraform|gh|project|all}"
    exit 1
    ;;
esac
