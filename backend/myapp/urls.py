from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChessPlayerViewSet
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]

router = DefaultRouter()
router.register(r'players', ChessPlayerViewSet)

urlpatterns = [
    path('', include(router.urls)),
]