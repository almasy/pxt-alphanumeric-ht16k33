// tests go here; this will not be compiled when this package is used as a library
serial.setBaudRate(9600);
HT16K33_Alnum4.init();
basic.forever(() => {
    HT16K33_Alnum4.showString("Hello, World!");
    HT16K33_Alnum4.showNumber(-1.23456);
    basic.pause(5000);
})