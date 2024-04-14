VERSION=$(grep 'VERSION=' version.txt | cut -d'=' -f2)

docker build -t csw2757/reservationhealthroom:${VERSION} .