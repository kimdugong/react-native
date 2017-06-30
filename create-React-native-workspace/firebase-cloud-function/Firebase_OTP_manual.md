Sample project path:  ~/Developer/dugong

![Auth의 종류](http://d.pr/i/yA2am8+)

![OTP의 Flow](http://d.pr/i/e0TgnP+)

* 간단하다
* 디바이스에 아이디/패스워드를 가지고 있지않다.

![Don't Do this](http://d.pr/i/KfROy5+)

* HTTP response를 탈취당할 수 있다.
* 코드를 보내는 곳은 항상외부에 존재해야 한다.

![Better Solution](http://d.pr/i/tDNpn7+)

![](http://d.pr/i/21r1v+)

![](http://d.pr/i/hoFbcm+)

* Google Cloud Function 으로 서버백엔드 해결

![](http://d.pr/i/p9uZAa+)

* 항상켜놓을필요없이 
* 필요할때만 사용된다.

![Whole Process](http://d.pr/i/o0AIF+)

## Cloud Function1
1. email과 전화번호를 받는다.
2. 전화번호가 사용된적이 없다?
3. 새로운 사용자를 생성한다.
4. 새로운 사용자로 입장한다.(번호는 아직 인증하기 전)

## Cloud Function2
5. 전화번호를 입력하고 로그인 요청을 한다.
6. 코드를 생성한다.
7. user에 생성된 코드를 저장한다.
8. 사용자에게 코드를 문자로 보낸다.

## Cloud Function3
9. 사용자가 코드를 받아 적고 요청한다.
10. 코드를 비교한다.
11. 사용된 코드로 마킹한다.
12. JWT를 유저에게 전달한다.

![To Do List](http://d.pr/i/8aLdG3+)

우리가 만들어야 할 cloud function은 뭐가 있나?

![functions](http://d.pr/i/hStixp+)

구글cloudfunctions이 어떻게 데이터를 접근하고 업데이트하나?

![firebase](http://d.pr/i/6VZ2kU+)



