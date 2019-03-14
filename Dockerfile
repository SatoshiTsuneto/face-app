FROM centos

RUN yum -y update && yum install -y httpd && yum -y clean all

ADD ./html /var/www/html

EXPOSE 80
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
