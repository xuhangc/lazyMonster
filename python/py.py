import glob
import json
import sys
import xlrd
import os

os.chdir(sys.argv[1])
file_list = glob.glob('*.xlsx')
print(json.dumps({'location': file_list}));
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
