# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
                ('username', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=200)),
                ('is_staff', models.CharField(max_length=200)),
            ],
        ),
        migrations.DeleteModel(
            name='Site',
        ),
    ]
