
from django.urls import path
from . import views
urlpatterns = [
   path('show',views.show.as_view(),name='show'),
   path('delete/<int:pk>',views.delete.as_view(),name='delete'),
   path('create',views.create.as_view(),name='create'),
]
