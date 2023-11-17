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

function install_all() {
    brew install typescript
    pip3 install http.server
    install_emscripten

    npm install --save @types/emscripten
}

install_all
