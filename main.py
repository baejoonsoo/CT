sorte=[] 

def merge( lists,  left,  mid,  right):
  i, j, k, l
  i = left
  j = mid+1
  k = left


  
  while i<=mid and j<=right:
    if lists[i]<=lists[j]:
      k+=1
      i+=1
      sorte[k] = lists[i];
    else:
      k+=1
      j+=1
      sorte[k] = lists[j];
  

  if(i>mid):
    for l in range(j,right+1):
      k+=1
      sorte[k] = lists[l];
  else:
    for l in range(i,mid+1):
      k+=1
      sorte[k] = lists[l];

  #  배열 sorted[](임시 배열)의 리스트를 배열 list[]로 재복사
  lists=sorte[::]
  # for(l=left; l<=right; l++){
  #   list[l] = sorted[l];
  # }


def merge_sort( list,  left,  right):
  mid

  if(left<right):
    mid = (left+right)/2 # 중간 위치를 계산하여 리스트를 균등 분할 -분할(Divide)
    merge_sort(list, left, mid); # 앞쪽 부분 리스트 정렬 -정복(Conquer)
    merge_sort(list, mid+1, right); # 뒤쪽 부분 리스트 정렬 -정복(Conquer)
    merge(list, left, mid, right); # 정렬된 2개의 부분 배열을 합병하는 과정 -결합(Combine)

n=int(input())

maps={}

for i in range(n):
  ip=input()
  if ip in maps:
    maps[ip]+=1
  else:
    maps[ip]=1

maxIpKey=[]
maxIp=0

for key in maps:
  if maxIp==maps[key]:
    maxIpKey.append(key)
  if maxIp<maps[key]:
    maxIpKey=[key];
    maxIp=maps[key]

def keySort(n):
  nList=map(int,str(n).split('.'))
  print(list(nList))

  yield nList[1]
  yield nList[2]
  yield nList[3]



for key in sorted(maxIpKey, key=keySort):
  print(f'{key} {maps[key]}')