FROM centos

RUN yum -y update && yum install -y httpd && yum -y clean all

COPY ./html /var/www/html

EXPOSE 80
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
