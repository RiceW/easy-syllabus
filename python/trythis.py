from table import table
response = table

tables = []

for item in response["Blocks"]:
    if item["BlockType"] == "TABLE":
        tables.append(item)

table_items = []

for children in tables[1]["Relationships"][0]["Ids"]:
    table_items.append(children)

def find_element_by_id(id):
    for block in response["Blocks"]:
        if block["Id"] == id:
            return block

def get_text_by_id(id):
    for block in response["Blocks"]:
        if block["Id"] == id:
            return block["Text"]

full_table = []

i = 0
row = []
while i < len(table_items):
    current_block = find_element_by_id(table_items[i])
    if (i != 0):
        previous_block = find_element_by_id(table_items[i - 1])
        if (current_block["RowIndex"] != previous_block["RowIndex"]):
            full_table.append(row)
            row = []
            row.append(current_block["Id"])
            i += 1
        else:
            row.append(current_block["Id"])
            i += 1
    else:
        row.append(current_block["Id"])
        i += 1
full_table.append(row)

id_table = []

z = 0
while z < len(full_table):
    j = 0
    while j < len(full_table[z]):
        element = find_element_by_id(full_table[z][j])
        full_table[z][j] = element["Relationships"][0]["Ids"]
        j += 1
    z += 1

x = 0
while x < len(full_table):
    y = 0
    while y < len(full_table[x]):
        z = 0
        while z < len(full_table[x][y]):
            full_table[x][y][z] = get_text_by_id(full_table[x][y][z])
            z += 1
        y += 1
    x += 1

x = 0
while x < len(full_table):
    y = 0
    while y < len(full_table[x]):
        full_table[x][y] = " ".join(full_table[x][y])
        y += 1
    x += 1

for rows in full_table:
    print(rows)