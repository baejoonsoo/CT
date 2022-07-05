n=int(input())


def fib(n):
  memo=[0]*(n+1)
  memo[0]=1
  memo[1]=1

  for i in range(2,n+1):
    memo[i]=(memo[i-1]+memo[i-2]*2)%10007
  
  return memo[n]


print(fib(n))
