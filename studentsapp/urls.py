from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from studentsapp import views

router = routers.DefaultRouter()
router.register(r'todos', views.TodoView, 'studentsapp')
app_name='studentsapp'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]