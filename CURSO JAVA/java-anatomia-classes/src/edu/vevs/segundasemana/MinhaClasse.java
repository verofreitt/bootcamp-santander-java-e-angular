package edu.vevs.segundasemana;
public class MinhaClasse {
        //CORPO DA CLASSE
    public static void main (String [] args) {
        //CORPO DO METODO MAIN
        String primeiroNome = "Veronica";
        String segundoNome = "Freitas";

        String nomeCompleto = nomeCompleto(primeiroNome, segundoNome);
        System.out.print(nomeCompleto);

    }

    public static String nomeCompleto (String primeiroNome, String segundoNome) {
        return "Resultado do metodo " + primeiroNome.concat(" ").concat(segundoNome);
    }

}
