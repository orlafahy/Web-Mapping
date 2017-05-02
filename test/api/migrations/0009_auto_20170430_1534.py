# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_atm1'),
    ]

    operations = [
        migrations.RenameField(
            model_name='atm',
            old_name='extra',
            new_name='extras',
        ),
    ]
