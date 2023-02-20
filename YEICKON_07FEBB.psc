Algoritmo ejemplo_4
	Escribir "Dado tres numeros diferentes entre ellos digame cual es el mas grande"
	Escribir "digite un número"
	Leer A
	Escribir "digite un segundo número"
	Leer B
	Escribir "digite un tercer número"
	Leer C
	
	Si A>B &  A>C Entonces
		Escribir "ES MAYOR " A
	SiNo
		Si B>A & B>C Entonces
			Escribir "ES MAYOR " B
		SiNo
			Escribir "ES MAYOR " C
		Fin Si
	Fin Si
FinAlgoritmo
