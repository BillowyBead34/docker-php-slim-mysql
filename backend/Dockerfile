FROM php:8.1-apache

WORKDIR /var/www/html/

# Install & enable PHP pdo_mysql driver
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

# APT Update & Upgrade
RUN apt update && apt upgrade -y

# Install git
RUN apt install git -y

# Install zip / unzip
RUN apt install zip unzip -y

# Enable Apache rewrite module
RUN a2enmod rewrite
