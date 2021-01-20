#/bin/sh
#python manage.py collectstatic --no-input; gunicorn --bind 0.0.0.0:8001 CVE.wsgi:application
sleep 5
python manage.py makemigrations
python manage.py makemigrations vul
python manage.py migrate
python manage.py migrate vul
python manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('tempus', 'admin@example.com', 'dobby')"
python manage.py loaddata backup/dump.json
python manage.py collectstatic --no-input; gunicorn --bind 0.0.0.0:8001 CVE.wsgi:application
#python manage.py dbrestore ll
