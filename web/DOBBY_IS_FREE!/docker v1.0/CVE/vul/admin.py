from django.contrib import admin
from .models import Blog, Flag

# Register your models here.


@admin.register(Blog)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'content',
                    ]
    list_display_links = ['id', 'title', 'content']


@admin.register(Flag)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ['id', 'flag',
                    ]
    list_display_links = ['id', 'flag']
