import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
SECRET_KEY = 'django-insecure-dg-f9utc5jyt6f0wuc*v+e6g+683ebqrh+2(*ffnmekr@#vj7x'

#settings.pyからそのままコピー
DATABASES = {
  'default': {
  'ENGINE': 'django.db.backends.sqlite3',
  'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
  }
}
DEBUG = True