Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Passaggi: 

1 Creazione prompt con richiesta chilometri da percorrere
    1.1 Creazione variabile km da percorrere 
2 Creazione prompt età del passeggero 
    2.1 Creazione variabile età passeggiero
3 Creazione prompt calcolo prezzo viaggio
    3.1 Creazione variabile const prezzo fisso (0.21 per km)
    3.2 Creazione variabile sconto in base all'età del passeggiero
        3.2.1 SE <18 sconto del 20%
        3.2.2 SE >65 sconto del 40% 
        3.2.3 ALTRIMENTI acquisto a prezzo pieno
4 Creazione prompt totale costo biglietto 