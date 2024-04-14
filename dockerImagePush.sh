VERSION=$(grep 'VERSION=' version.txt | cut -d'=' -f2)

docker push csw2757/reservationhealthroom:${VERSION}