package com.example.backend.utils;

public class SPARQLQueries {
    public static final String CovidSPARQLEndpoint = "http://kg-hub-rdf.berkeleybop.io/blazegraph/sparql";
    public static final String DbpediaSPARQLEndpoint = "http://dbpedia.org/sparql";

    public static final String bioLinkPrefix = "PREFIX bl: <https://w3id.org/biolink/vocab/>";
    public static final String rdfsPrefix = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>";
    public static final String dctermPrefix = "PREFIX dcterm: <http://purl.org/dc/terms/>";
    public static final String dbrPrefix = "PREFIX dbr: <http://dbpedia.org/resource/>";
    public static final String dboPrefix = "PREFIX dbo:<http://dbpedia.org/ontology/>";

    public static final String chemicalSubstancesNames = bioLinkPrefix + rdfsPrefix +
            "SELECT DISTINCT ?url ?name " +
            "WHERE{ " +
            "?url bl:category bl:ChemicalSubstance; " +
            "          rdfs:label ?name " +
            "} LIMIT 100";

    public static final String countAllCategories =bioLinkPrefix +
            "SELECT (COUNT(?c) AS ?count) ?category " +
            "WHERE { " +
            "?c bl:category ?category" +
            "} GROUP BY ?category";

    public static String generatePublicationQueryDynamically(String categoryName){
        return  bioLinkPrefix + rdfsPrefix +
                "SELECT (COUNT(?target) AS ?count) ?publication ?publicationLabel " +
                "WHERE{ " +
                "?publication bl:category bl:Publication; " +
                "bl:mentions ?target; " +
                "rdfs:label ?publicationLabel. " +
                "?target bl:category "+categoryName+". " +
                "} GROUP BY ?publication ?publicationLabel ORDER BY DESC (?count) " +
                "LIMIT 15";
    }

    public static String getChemicalSubstanceDetailsQuery(String name){
        return bioLinkPrefix + rdfsPrefix + "SELECT ?substance ?substanceName ?protein ?proteinName " +
                "WHERE { " +
                "  ?substance bl:interacts_with  ?protein ; " +
                "  bl:category bl:ChemicalSubstance. " +
                "  ?protein bl:category ?proteinCat . " +
                "  ?substance  rdfs:label ?substanceName; " +
                "    bl:synonym ?synonym."+
                "  ?protein rdfs:label ?proteinName " +
                "  FILTER ( ?proteinCat = bl:Protein || ?proteinCat = bl:Gene ) " +

                "  \tFILTER( ?synonym = \""+name+"\" || ?substanceName = \""+name+"\") \n" +
                "}";
    }

    public static String getBiologicalProcessDetailsQuery(String biologicalProcessName){
        return bioLinkPrefix + rdfsPrefix + dctermPrefix + "SELECT DISTINCT ?process ?synonym ?name ?description \n" +
                "WHERE{\n" +
                "\t?process ?pred ?target;\n" +
                "             bl:category bl:BiologicalProcess.\n" +
                "  \t?process rdfs:label ?name;\n" +
                "             dcterm:description ?description;\n" +
                "             bl:synonym ?synonym,\n" +
                "             ?filter\n" +
                "  \tFILTER( ?filter = \""+biologicalProcessName+"\" || ?name = \""+biologicalProcessName+"\") \n" +
                "} LIMIT 10";
    }

    public static String getMolecularActivityDetailsQuery(String molecularActivityName){
        return bioLinkPrefix + rdfsPrefix + dctermPrefix + "SELECT DISTINCT ?activity ?synonym ?name ?description \n" +
                "WHERE{\n" +
                "\t?activity ?pred ?target;\n" +
                "             bl:category bl:MolecularActivity.\n" +
                "  \t?activity rdfs:label ?name;\n" +
                "             dcterm:description ?description;\n" +
                "             bl:synonym ?synonym,\n" +
                "             ?filter\n" +
                "  \tFILTER( ?filter = \""+molecularActivityName+"\" || ?name = \""+molecularActivityName+"\") \n" +
                "}";
    }

    public static String getDiseaseDetailsQuery(String diseaseName){
        return bioLinkPrefix + rdfsPrefix + dctermPrefix + "SELECT DISTINCT ?disease ?synonym ?name ?description \n" +
                "WHERE{\n" +
                "\t?disease ?pred ?target;\n" +
                "             bl:category bl:Disease.\n" +
                "  \t?disease rdfs:label ?name;\n" +
                "             dcterm:description ?description;\n" +
                "             bl:synonym ?synonym,\n" +
                "             ?filter\n" +
                "  \tFILTER( ?filter = \""+diseaseName+"\" || ?name = \""+diseaseName+"\") \n" +
                "}";
    }

    public static String getProteinDetailsQuery(String proteinName){
        return bioLinkPrefix + rdfsPrefix + "SELECT DISTINCT ?protein ?name  " +
                "WHERE { " +
                "  ?protein ?pred ?target; " +
                "   bl:category bl:Protein; " +
                "    rdfs:label ?name. " +
                "   FILTER( ?name = \""+proteinName+"\")  " +
                "}";
    }

    public static String getAbstractForCategoryQuery(String category){
        return dbrPrefix +dboPrefix + "SELECT ?abstract " +
                "WHERE { " +
                "dbr:"+category+" dbo:abstract ?abstract. " +
                "FILTER(lang(?abstract)=\"en\") " +
                "} ";
    }

    public static String getGeneDetailsQuery(String geneName){
        return bioLinkPrefix + rdfsPrefix + dctermPrefix + "SELECT DISTINCT ?geneUrl ?name ?description " +
                "WHERE{ " +
                " ?geneUrl ?pred ?target ; " +
                "    bl:category bl:Gene; " +
                "        rdfs:label ?name; " +
                "        dcterm:description ?description. " +
                "   FILTER( ?name = \""+geneName+"\")  " +
                "}";
    }
}
