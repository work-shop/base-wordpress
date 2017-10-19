#!/bin/bash


source ./.env

scp -P $KINSTA_PORT -r ./dist/wp-content/themes/custom $KINSTA_USER@$KINSTA_IP:./public/wp-content/themes
scp -P $KINSTA_PORT -r ./dist/wp-content/plugins $KINSTA_USER@$KINSTA_IP:./public/wp-content/
scp -P $KINSTA_PORT -r ./dist/wp-content/mu-plugins $KINSTA_USER@$KINSTA_IP:./public/wp-content/
