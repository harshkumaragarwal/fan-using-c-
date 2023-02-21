# fan (cpp for functionalities)
To install in your system, follow the steps
          1. Download zip file of the code.
          2. Open cmd 
             2.1 Change current location to root directory of the folder
             2.2 Run following commands
                 2.2.1 git clone https://github.com/emscripten-core/emsdk.git
                 2.2.2 cd emsdk
                 2.2.3 emsdk install latest
                 2.2.4 emsdk activate latest
                 2.2.5 emsdk_env.sh
             You can also visit https://emscripten.org/docs/getting_started/downloads.html for further details. For linux, visit the same link.     
          3. cd to root.
          4. Paste emcc new.cpp -o mycpp.js -s EXPORTED_FUNCTIONS="['_speedUpdate','_fnOne','_fnTwo']" -sEXPORTED_RUNTIME_METHODS="['ccall']"  to cmd line.
          5. Open the index,html file at live server. 
          

          
