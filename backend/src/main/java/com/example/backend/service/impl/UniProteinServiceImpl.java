package com.example.backend.service.impl;

import com.example.backend.service.UniProteinService;
import org.springframework.stereotype.Service;
import uk.ac.ebi.kraken.interfaces.uniprot.UniProtEntry;
import uk.ac.ebi.kraken.interfaces.uniprot.comments.Comment;
import uk.ac.ebi.kraken.interfaces.uniprot.comments.CommentType;
import uk.ac.ebi.kraken.model.uniprot.comments.*;
import uk.ac.ebi.uniprot.dataservice.client.Client;
import uk.ac.ebi.uniprot.dataservice.client.ServiceFactory;
import uk.ac.ebi.uniprot.dataservice.client.exception.ServiceException;
import uk.ac.ebi.uniprot.dataservice.client.uniprot.UniProtService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class UniProteinServiceImpl implements UniProteinService {
    @Override
    public UniProtEntry getProteinEntityFromUniProt(String proteinId) throws ServiceException {
        ServiceFactory serviceFactoryInstance = Client.getServiceFactoryInstance();

        // UniProtService
        UniProtService uniprotService = serviceFactoryInstance.getUniProtQueryService();

        uniprotService.start();
        UniProtEntry entry = uniprotService.getEntry(proteinId);

        uniprotService.stop();

        return entry;
    }

    @Override
    public List<String> getFunctionComments(UniProtEntry entry) {
        List<Comment> comments = entry.getComments(CommentType.FUNCTION);
        List<String> functionCommentsList = new ArrayList<>();
        comments.forEach(eachComment->{
            FunctionCommentImpl functionComment = (FunctionCommentImpl) eachComment;
            functionComment.getTexts().forEach(eachText->{
                CommentTextImpl commentText = (CommentTextImpl) eachText;
                Arrays.stream(commentText.getValue().split("\\."))
                        .forEach(eachValue->functionCommentsList.add(eachValue.trim()+"."));
            });
        });
        return functionCommentsList;
    }

    @Override
    public List<String> getCatalyticActivityComments(UniProtEntry entry) {
        List<String> catalyticActivityCommentsList = new ArrayList<>();
        List<Comment> catalyticActivity = entry.getComments(CommentType.CATALYTIC_ACTIVITY);
        catalyticActivity.forEach(eachComment -> {
            CatalyticActivityCommentStructuredImpl commentStructured = (CatalyticActivityCommentStructuredImpl) eachComment;
            catalyticActivityCommentsList.add(commentStructured.getReaction().getName());
        });
        return catalyticActivityCommentsList;
    }

    @Override
    public List<String> getCofactorComments(UniProtEntry entry) {
        List<String> cofactorCommentsList = new ArrayList<>();
        List<Comment> cofactor = entry.getComments(CommentType.COFACTOR);
        cofactor.forEach(eachComment -> {
            CofactorCommentStructuredImpl cofactorCommentStructured  = (CofactorCommentStructuredImpl) eachComment;
            cofactorCommentStructured.getCofactors().forEach(eachCofactor ->
                    cofactorCommentsList.add(eachCofactor.getName()));
        });
        return cofactorCommentsList;
    }

    @Override
    public List<String> getSubunitComments(UniProtEntry entry) {
        List<String> subunitCommentsList = new ArrayList<>();
        List<Comment> subunit = entry.getComments(CommentType.SUBUNIT);
        subunit.forEach(eachComment -> {
            SubunitCommentImpl subunitComment = (SubunitCommentImpl) eachComment;
            subunitComment.getTexts().forEach(eachText->{
                CommentTextImpl commentText = (CommentTextImpl) eachText;
                Arrays.stream(commentText.getValue().split("\\."))
                        .forEach(eachValue->subunitCommentsList.add(eachValue.trim()+"."));
            });
        });
        return subunitCommentsList;
    }

    @Override
    public List<String> getSubCellularLocationComments(UniProtEntry entry) {
        List<String> subCellularLocationList = new ArrayList<>();
        List<Comment> subCellularLocation = entry.getComments(CommentType.SUBCELLULAR_LOCATION);
        subCellularLocation.forEach(eachComment -> {
            SubcellularLocationCommentImpl subCellularLocationComment = (SubcellularLocationCommentImpl) eachComment;
            subCellularLocationComment.getSubcellularLocations().forEach(location->{
                subCellularLocationList.add(location.getLocation().getValue() +" "+ location.getTopology().getValue());
            });
        });
        return subCellularLocationList;
    }

    @Override
    public List<DiseaseImpl> getDiseaseComments(UniProtEntry entry) {
        List<DiseaseImpl> diseaseList = new ArrayList<>();
        List<Comment> disease = entry.getComments(CommentType.DISEASE);
        disease.forEach(comment -> {
            DiseaseCommentStructuredImpl structuredDiseaseComment = (DiseaseCommentStructuredImpl) comment;
            DiseaseImpl diseaseImpl = (DiseaseImpl) structuredDiseaseComment.getDisease();
            diseaseList.add(diseaseImpl);
        });
        return diseaseList;
    }
}
