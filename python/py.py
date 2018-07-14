import glob
import json
import sys

import xlrd
# Takes first name and last name via command
# line arguments and then display them

# print "Output from Python"
# print "First name: " + sys.argv[1]
# '''
# print "Last name: " + sys.argv[2]
# import json
# import time
# print json.dumps({'bar': ('baz', None, 1.0, 2), 'hi':'1'})
# time.sleep(3)
# print json.dumps({'bar': ('baz', None, 1.0, 2), 'hi':'2'})
# time.sleep(3)
# '''

file_list = glob.glob('*.xlsx')
workbook = xlrd.open_workbook(file_list[0])
worksheet = workbook.sheet_by_name('Retest information')

data = []
keys = [v.value for v in worksheet.row(0)]
for row_number in range(worksheet.nrows):
    if row_number == 0:
        continue
    row_data = {}
    for col_number, cell in enumerate(worksheet.row(row_number)):
        row_data[keys[col_number]] = cell.value
    data.append(row_data)

print(json.dumps({'data': data}))
