
// ========= FIZZ BUZZ =========
var txt = "";
for(var i = 0; i <= 50; i++)
{
	(i % 3 == 0 && i % 5 == 0) ? txt += ' FizzBuzz' : (i % 3 == 0) ? txt += ' Fizz' :  
									  (i % 5 == 0) ? txt += ' Buzz' : txt += ' ' + i; 								  
}
console.log(txt);
//========================================
//========================================

/* ========= PIEDRA PAPEL O TIJERA =========
	1 = piedra
	2 = papel
	3 = tijera
*/
var ai = Math.floor((Math.random() * 3) + 1);
var me;
do
{
	me = prompt('Elige piedra(1), papel(2) o tijera(3)');
}
while
(
	me != 1 && me != 2 && me != 3 && me.toLowerCase() != 'piedra' && me.toLowerCase() != 'papel' &&
									 me.toLowerCase() != 'tijera'
)
		 
switch(ai)
{
	case 1:
		ai = 'piedra';
		break;
	case 2:
		ai = 'papel';
		break;
	case 3:
		ai = 'tijera';
		break;
}

function compara(ai, me)
{
	var ganador = 0;
	if(ai == 'piedra')
	{
		return (me == 1 || me == 'piedra') ? 'Empate' : (me == 2 || me == 'papel') ? 'Ganas contra ' + ai : 
																	'Pierdes contra ' + ai +', Intentalo otra vez';
	}
	if(ai == 'papel')
	{
		return (me == 2 || me == 'papel') ? 'Empate' : (me == 3 || me == 'tijera') ? 'Ganas contra ' + ai : 
																	'Pierdes contra ' + ai +', Intentalo otra vez';
	}
	if(ai == 'tijera')
	{
		return (me == 3 || me == 'tijera') ? 'Empate' : (me == 1 || me == 'piedra') ? 'Ganas contra ' + ai : 
																	'Pierdes contra ' + ai +', Intentalo otra vez';
	}
}

var ganador = compara(ai , me.toLowerCase());

console.log(ganador);
//========================================
//========================================


// ========= PALINDROMOS =========

var str = prompt('Escribe una palabra o frase');
str = str.split(' ').join('');

console.log(str);
var i = 0;
var j = str.length - 1;
while(i < str.length)
{
	if( str[i] != str[j])
	{
		console.log('No es palindromo');
		break;
	}
	i++;
	j--;
}
if(i == str.length) console.log('si es palindromo');
//========================================
//========================================

// ========= Triangulos =========

function trinagulo(n)
{
	for (var j = 0; j <= n; j++)
	{	
		var txt = '';
		for(var i = 0; i <= j; i++)
		{
			txt += '*';
		}
		console.log(txt);
	}	
}

var n = prompt('Da un numero mayor a 0');
trinagulo(n);
//========================================
//========================================


// ========= MAYUSCULAS MINUSCULAS =========

var str = prompt("Da una frase");
str = str.split('');
for(i in str)
{
	str[i] == ' ' ? console.log(str[i] + ' es un espacio') : str[i] == str[i].toLowerCase() ? 
			console.log(str[i] + ' es minuscula') : console.log(str[i] + ' es mayuscula');
}
//========================================
//========================================





























