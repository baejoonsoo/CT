codeup=[
' ****  ***  ***   ***** *   * ****',
'*     *   * *  *  *     *   * *   *',
'*     *   * *   * *     *   * *   *',
'*     *   * *   * ****  *   * ****',
'*     *   * *   * *     *   * *',
'*     *   * *  *  *     *   * *',
" ****  ***  ***   *****  ***  *"]

w,h=map(int,input().split())

for s in codeup:
  for i in range(h):
    for k in range(len(s)):
      print(s[k]*w,end='')
    print('0')