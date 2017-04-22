# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20170416_1825'),
    ]

    operations = [
        migrations.RenameField(
            model_name='atm',
            old_name='lat',
            new_name='latitudes',
        ),
        migrations.RenameField(
            model_name='atm',
            old_name='long',
            new_name='longitudes',
        ),
    ]
