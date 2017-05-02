# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_users'),
    ]

    operations = [
        migrations.CreateModel(
            name='atm1',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
                ('type', models.CharField(max_length=200)),
                ('latitudes', models.FloatField()),
                ('longitudes', models.FloatField()),
                ('one', models.BooleanField()),
                ('two', models.BooleanField()),
                ('three', models.BooleanField()),
            ],
        ),
    ]
