function install_emscripten() {
    VERSION="latest"

    mkdir -p third_party
    cd third_party

    # Delete any previous emsdk installation.
    rm -rf emsdk

    git clone https://github.com/emscripten-core/emsdk.git
    cd emsdk
    ./emsdk install "${VERSION}"
    ./emsdk activate "${VERSION}"
}

function install_all_linux() {
    echo "Installing on Linux"
    sudo apt-get install git npm
    sudo npm install --global typescript@3.3.3
    sudo npm install --global @types/emscripten
    sudo apt-get install clang

    pip3 install httpserver

    install_emscripten
}

function install_all_macos() {
    echo "Installing on MacOS"
    brew install typescript npm http.server git
    # pip3 install http.server
    install_emscripten

    npm install --save @types/emscripten
}

# First check OS.
OS="$(uname)"
if [[ "${OS}" == "Linux" ]]
then
    install_all_linux
elif [[ "${OS}" == "Darwin" ]]
then
    install_all_macos
fi


