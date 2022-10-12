FROM php:8.1-apache

WORKDIR /var/www/html/

# Install & enable PHP pdo_mysql driver
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

# Install composer
COPY ./composer-installer.sh /var/www/html/composer-installer.sh
RUN chmod +x ./composer-installer.sh
RUN ./composer-installer.sh

# Enable Apache rewrite module
RUN a2enmod rewrite
