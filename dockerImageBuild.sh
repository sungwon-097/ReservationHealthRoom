VERSION=$(grep 'VERSION=' version.txt | cut -d'=' -f2)

#docker build -t csw2757/reservationhealthroom:${VERSION} .
docker login -u csw2757@gmail.com -p f5g6h7j8**