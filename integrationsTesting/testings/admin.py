from django.contrib import admin
from .models import Book
# Register your models here.


class adminBook(admin.ModelAdmin):
    list_display = ('title', 'author')

admin.site.register(Book, adminBook)
