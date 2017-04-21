# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20170414_2249'),
    ]

    operations = [
        migrations.CreateModel(
            name='ATM',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('name', models.CharField(max_length=200)),
                ('type', models.CharField(max_length=200)),
                ('lat', models.IntegerField()),
                ('long', models.IntegerField()),
                ('extra', models.CharField(max_length=200)),
            ],
        ),
    ]
