# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_atm'),
    ]

    operations = [
        migrations.AlterField(
            model_name='atm',
            name='lat',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='atm',
            name='long',
            field=models.FloatField(),
        ),
    ]
