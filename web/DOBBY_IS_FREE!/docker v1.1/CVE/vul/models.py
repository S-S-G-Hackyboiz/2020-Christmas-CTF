from django.db import models

# Create your models here.


class Blog(models.Model):
    title = models.TextField(

    )
    content = models.TextField(

    )


class Flag(models.Model):
    flag = models.TextField()
