#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

mkdir -p $DIR/../.tmp

echo $CERTBOT_VALIDATION > $DIR/../.tmp/$CERTBOT_TOKEN

aws s3 cp $DIR/../.tmp/$CERTBOT_TOKEN s3://helsinkifoodguide.com/.well-known/acme-challenge/$CERTBOT_TOKEN \
--acl public-read \
--profile ericnishio

sleep 5

aws acm import-certificate \
--certificate file:///etc/letsencrypt/live/helsinkifoodguide.com/cert.pem \
--private-key file:///etc/letsencrypt/live/helsinkifoodguide.com/privkey.pem \
--certificate-chain file:///etc/letsencrypt/live/helsinkifoodguide.com/fullchain.pem \
--profile ericnishio \
--region us-east-1
