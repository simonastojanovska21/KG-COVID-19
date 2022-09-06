package com.example.backend.utils;

public class FormatStrings {

    public static String formatNames(String name){
        return name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();
    }

    public static String formatIDs(String name){
        return name.replace('_',':');
    }
}
