# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20170416_1834'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]
