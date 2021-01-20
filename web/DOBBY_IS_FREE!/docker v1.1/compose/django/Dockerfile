# More Datascience frendly gist can be found here: https://gist.github.com/ruddra/870d7a51238ddfa4b50375086c12a4f5
# pull official python alpine image
FROM python:3.6-alpine

# Set Environment Variable
ENV PYTHONUNBUFFERED 1
ENV C_FORCE_ROOT true

# Making source and static directory
RUN mkdir /src
#RUN mkdir /static

# Creating Work Directory
WORKDIR /src

RUN apk update && apk add --no-cache \
    postgresql \
    zlib \
    jpeg


RUN apk add --no-cache --virtual build-deps \
    gcc \
    python3-dev \
    musl-dev \
    postgresql-dev\
    zlib-dev \
    jpeg-dev


# Update pip
RUN pip3 install --upgrade pip

# **if you want to install scipy uncomment the following file**
# RUN pip3 install --no-cache-dir --disable-pip-version-check scipy==1.3.1

# Installing requirements.pip from project
COPY CVE/requirements.txt /scripts/
RUN pip3 install --no-cache-dir -r /scripts/requirements.txt
#COPY CVE/user/jwt_tokens.py /usr/local/lib/python3.6/site-packages/rest_framework_simplejwt/tokens.py

# *install psycopg2 if you don't have it requirements.pip*
# RUN pip install --no-cache-dir psycopg2

# removing temporary packages from docker and removing cache
RUN apk del build-deps && \
    find -type d -name __pycache__ -prune -exec rm -rf {} \; && \
    rm -rf ~/.cache/pip

# CMD will run when this dockerfile is running
#RUN chmod +x /src/migrate.sh
#ENTRYPOINT ["/src/migrate.sh"]
CMD ["/bin/sh", "/src/migrate.sh", "&"]
#CMD ["sh", "-c", "python manage.py collectstatic --no-input; gunicorn --bind 0.0.0.0:8001 CVE.wsgi:application"]
#CMD ["sh", "-c", "/bin/sh create_superuser.sh;"]
