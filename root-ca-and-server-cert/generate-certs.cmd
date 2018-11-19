openssl genrsa -out root-ca.key 2048
openssl req -new -x509 -sha256 -key root-ca.key -out root-ca.crt -config root-ca-cert.conf -days 365
openssl genrsa -out server.key 2048
openssl req -new -sha256 -out server.csr -key server.key -config server-cert.conf
mkdir issued
break>index.txt

echo 01>serial
openssl ca -batch -config ca.conf -out server.crt -extfile server-extensions.conf -in server.csr
openssl pkcs12 -export -in server.crt -inkey server.key -out server.pfx -password pass:mypassword