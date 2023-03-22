var a= new Date()
var b= a.getTime()
var age= prompt ('Enter your Birth year :')
var c= new Date(age)
var d= c.getTime()
var e= b-d
var res= e / (1000*60*60*24*365)
document.write('Youe age is : '+ Math.floor(res))