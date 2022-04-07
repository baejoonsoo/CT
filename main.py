def solution(id_list, report, k):
    answer = [0 for i in id_list]

    repData=[]

    for id in id_list:
      repData.append({
        'uId':id,
        "reportCount":0,
        "repUser":[]
      })
    
    my_set=set(report)
    my_list=list(my_set)

    for repLog in my_list:
      for index,data in enumerate(repData):
        repLogSplit=repLog.split()

        if data['uId'] == repLogSplit[1]:
          repData[index]['reportCount']=1+repData[index]['reportCount']
          repData[index]['repUser'].append(repLogSplit[0])

    for data in repData:
      if data['reportCount']>=k:
        for repUser in data['repUser']:
          answer[list(id_list).index(repUser)]+=1


    return answer


print(solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2))
print(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3))