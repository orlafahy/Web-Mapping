"""test URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from api.models import ATM, Users, atm1
from rest_framework import serializers, viewsets, routers

# Serializers define the API representation.
class ATMSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ATM
        fields = ('url', 'name', 'type', 'latitudes', 'longitudes', 'extras')

class UsersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ('url', 'name', 'email', 'password')

class atm1Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = atm1
        fields = ('url', 'name', 'type', 'latitudes', 'longitudes', 'one', 'two', 'three')


# ViewSets define the view behavior.
class ATMViewSet(viewsets.ModelViewSet):
    queryset = ATM.objects.all()
    serializer_class = ATMSerializer

class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class atm1ViewSet(viewsets.ModelViewSet):
    queryset = atm1.objects.all()
    serializer_class = atm1Serializer


# Routers provide a way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'atms', ATMViewSet)
router.register(r'users', UsersViewSet)
router.register(r'atm', atm1ViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
