let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", kiir1);

function kiir1(){
    document.getElementById("jobb").innerHTML=`<code><pre>public class gyak03 {
        public static void main(String[] args) {
            int a;
            int b;
            int c;
            a=6;
            b=4;
            c=2;
            System.out.println(a+b+c); //12
            System.out.println("Összegük: "+a+b+c); //:642
            int z=a+b+c;
            System.out.println("Összegük:" + z);  //:12
        }
    }
    </pre></code>`
}
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", kiir2);
function kiir2(){
    document.getElementById("jobb").innerHTML=`<code><pre>import java.util.Scanner;
    public class gyak03 {
        public static void main(String[] args) {
            Scanner be=new Scanner(System.in);
            System.out.println("kérem a téglalap oldalát: ");
            int a = be.nextInt();
    
            int ker = a*4;
            int ter = a*a;
            be.close();
            System.out.println("kerület: " + ker);
            System.out.println("terület: " + ter);
    
        }
    }
    
    </pre></code>`
}
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", kiir3)
function kiir3(){
    document.getElementById("jobb").innerHTML=`<code><pre>
    public class gyak03 {
        public static void main(String[] args) {
            Scanner be=new Scanner(System.in);
            System.out.println("kérem a téglalap oldalát: ");
            int a = be.nextInt();
    
            int ker = a*4;
            int ter = a*a;
            be.close();
            System.out.println("kerület: " + ker);
            System.out.println("terület: " + ter);
    
        }
    }
    
    </pre></code>`
    
}
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", kiir4)
function kiir4(){
    document.getElementById("jobb").innerHTML=`<code><pre>
    import java.util.Scanner;

public class gyak03 {
    public static void main(String[] args) {
        Scanner be = new Scanner(System.in);
        int osszeg=0;
        for (int i = 1; i <= 8; i++) {
            System.out.print(i+". jegy: ");
            int jegy = be.nextInt();
            osszeg+=jegy;
        }
        double atlag= (double)osszeg/8;
        System.out.println("Átlaga: " + atlag);

    }
}


    
    </pre></code>`
    
}
let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", kiir5)
function kiir5(){
    document.getElementById("jobb").innerHTML=`<code><pre>
    public class gyak03 {
        public static void main(String[] args) {
            String nev = "Kata";
            String ige = "van";
            String dolog = "egy pepsid?";
    
            System.out.println(nev + ige + dolog);
            System.out.println(nev +" "+ ige +" "+ dolog);
        }
    }
    
    


    
    </pre></code>`
    
}
let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", kiir6)
function kiir6(){
    document.getElementById("jobb").innerHTML=`<code><pre>
    import java.util.Scanner;
    public class gyak03 {
        public static void main(String[] args) {
            String nev = "Kata";
            String ige = "van";
            String dolog = "egy pepsid?";
    
            System.out.println(nev + ige + dolog);
            System.out.println(nev +" "+ ige +" "+ dolog);
        }
    }
    
    


    
    </pre></code>`
    
}
    
    


    
 