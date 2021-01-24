smallDictionary = {'1-1': 'GRADED COMPONENTS', '1-2': 'DATES', '1-3': 'GRADE WEIGHTS', '2-1': 'Module I Test', '2-2': '2019-10-05', '2-3': '20%', '3-1': 'Module 2 Assignment', '3-2': '2019-11-10', '3-3': '20%', '4-1': 'Module 3 Assignment', '4-2': '2019-12-02', '4-3': '20%', '5-1': 'Final Exam', '5-2': 'During the final exam period (scheduled by the Registrar)', '5-3': '40%', '6-1': 'Professionalism', '6-2': 'Applicable across entire semester (from -5% to +5% final course grade adjustment)'}
al = []
l = ['GRADED COMPONENTS', 'DATES', 'GRADE WEIGHTS', 'Module I Test', '2019-10-05', '20%', 'Module 2 Assignment', '2019-11-10', '20%', 'Module 3 Assignment', '2019-12-02', '20%', 'Final Exam', 'During the final exam period (scheduled by the Registrar)', '40%', 'Professionalism', 'Applicable across entire semester (from -5% to +5% final course grade adjustment)']
l = l[3:]

def getdic(l):
  for x in range(3):
    td = dict()
    td["id"] = x + 1
    td["body"] = l.pop(0)
    td["date"] = l.pop(0)
    td["weight"] = l.pop(0)
    al.append(td)
  print(al)

getdic(l)