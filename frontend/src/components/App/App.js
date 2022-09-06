import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "../Header/header";
import Home from "../Home/home";
import Footer from "../Footer/footer";
import Dashboard from "../Dashboard/dashboard";
import Statistics from "../Statistics/statistics";
import CategoriesService from "../../services/CategoriesService";
import Publications from "../Publications/publications";
import PublicationService from "../../services/PublicationService";
import MolecularActivityService from "../../services/MolecularActivityService";
import NotFound from "../NotFound/notFound";
import ChemicalSubstanceSearch from "../ChemicalSubstance/chemicalSubstanceSearch";
import DiseaseService from "../../services/DiseaseService";
import BiologicalProcessService from "../../services/BiologicalProcessService";
import ChemicalSubstanceService from "../../services/ChemicalSubstanceService";
import ProteinService from "../../services/ProteinService";
import ChemicalSubstanceDetails from "../ChemicalSubstance/chemicalSubstanceDetails";
import BiologicalProcessSearch from "../BiologicalProcess/biologicalProcessSearch";
import BiologicalProcessDetails from "../BiologicalProcess/biologicalProcessDetails";
import DiseaseSearch from "../Disease/diseaseSearch";
import DiseaseDetails from "../Disease/diseaseDetails";
import GeneSearch from "../Gene/geneSearch";
import GeneDetails from "../Gene/geneDetails";
import ProteinSearch from "../Protein/proteinSearch";
import ProteinDetails from "../Protein/proteinDetails";
import MolecularActivitySearch from "../MolecularActivity/molecularActivitySearch";
import MolecularActivityDetails from "../MolecularActivity/molecularActivityDetails";
import Test from "../ATEST/test";
import GeneService from "../../services/GeneService";


class App extends Component {
    constructor(props) {
      super(props);
      this.state= {
          statistics: {'nodes': 574778, 'categories': 20, 'edges': 24145561},
          errorMessage: "",
          biologicalProcessAbstract: "",
          biologicalProcessName: "",
          chemicalSubstanceAbstract: "",
          chemicalSubstanceName: "",
          diseaseAbstract: "",
          diseaseName: "",
          geneAbstract: "",
          geneName: "",
          molecularActivityAbstract: "",
          molecularActivityName: "",
          proteinAbstract: "",
          proteinName: "",
          categories: [],
          publications: [],
          protein :{
              uniProtId: "P00813",
              proteinUrl: "http://identifiers.org/uniprot/P00813",
              proteinName: "ADA",
              functions: [
                  "Catalyzes the hydrolytic deamination of adenosine and 2-deoxyadenosine (PubMed:8452534, PubMed:16670267).",
                  "Plays an important role in purine metabolism and in adenosine homeostasis.",
                  "Modulates signaling by extracellular adenosine, and so contributes indirectly to cellular signaling events.",
                  "Acts as a positive regulator of T-cell coactivation, by binding DPP4 (PubMed:20959412).",
                  "Its interaction with DPP4 regulates lymphocyte-epithelial cell adhesion (PubMed:11772392).",
                  "Enhances dendritic cell immunogenicity by affecting dendritic cell costimulatory molecule expression and cytokines and chemokines secretion (By similarity).",
                  "Enhances CD4+ T-cell differentiation and proliferation (PubMed:20959412).",
                  "Acts as a positive modulator of adenosine receptors ADORA1 and ADORA2A, by enhancing their ligand affinity via conformational change (PubMed:23193172).",
                  "Stimulates plasminogen activation (PubMed:15016824).",
                  "Plays a role in male fertility (PubMed:21919946, PubMed:26166670).",
                  "Plays a protective role in early postimplantation embryonic development (By similarity)."
              ],
              catalyticActivity: [
                  "adenosine + H(+) + H2O = inosine + NH4(+)"
              ],
              cofactors: [
                  "Zn(2+)"
              ],
              subunit: [
                  "Interacts with DPP4 (via extracellular domain) (PubMed:10951221, PubMed:14691230, PubMed:7907293, PubMed:8101391, PubMed:15016824).",
                  "Interacts with PLG (via Kringle 4 domain); the interaction stimulates PLG activation when in complex with DPP4 (PubMed:15016824)."
              ],
              subCellularLocation: [
                  "Cell membrane Peripheral membrane protein",
                  "Cell junction ",
                  "Cytoplasmic vesicle lumen ",
                  "Cytoplasm ",
                  "Lysosome "
              ],
              diseases: [
                  {
                      diseaseId: {
                          value: "Severe combined immunodeficiency autosomal recessive T-cell-negative/B-cell-negative/NK-cell-negative due to adenosine deaminase deficiency"
                      },
                      acronym: {
                          value: "ADASCID"
                      },
                      description: {
                          evidenceIds: [
                              {
                                  id: 0,
                                  attribute: {
                                      id: 0,
                                      value: "10200056"
                                  },
                                  evidenceCode: "ECO_0000269",
                                  typeValue: "PubMed",
                                  value: "ECO:0000269|PubMed:10200056",
                                  type: "EXPERIMENTAL"
                              },
                              {
                                  id: 0,
                                  attribute: {
                                      id: 0,
                                      value: "1284479"
                                  },
                                  evidenceCode: "ECO_0000269",
                                  typeValue: "PubMed",
                                  value: "ECO:0000269|PubMed:1284479",
                                  type: "EXPERIMENTAL"
                              },
                              {
                                  id: 0,
                                  attribute: {
                                      id: 0,
                                      value: "2166947"
                                  },
                                  evidenceCode: "ECO_0000269",
                                  typeValue: "PubMed",
                                  value: "ECO:0000269|PubMed:2166947",
                                  type: "EXPERIMENTAL"
                              },
                              {
                                  id: 0,
                                  attribute: {
                                      id: 0,
                                      value: "2783588"
                                  },
                                  evidenceCode: "ECO_0000269",
                                  typeValue: "PubMed",
                                  value: "ECO:0000269|PubMed:2783588",
                                  type: "EXPERIMENTAL"
                              },
                              {
                                  id: 0,
                                  attribute: {
                                      id: 0,
                                      value: "3182793"
                                  },
                                  evidenceCode: "ECO_0000269",
                                  typeValue: "PubMed",
                                  value: "ECO:0000269|PubMed:3182793",
                                  type: "EXPERIMENTAL"
                              },
                              {
                                  id: 0,
                                  attribute: {
                                      id: 0,
                                      value: "3839802"
                                  },
                                  evidenceCode: "ECO_0000269",
                                  typeValue: "PubMed",
                                  value: "ECO:0000269|PubMed:3839802",
                                  type: "EXPERIMENTAL"
                              },
                              {
                                  id: 0,
                                  attribute: {
                                      id: 0,
                                      value: "6208479"
                                  },
                                  evidenceCode: "ECO_0000269",
                                  typeValue: "PubMed",
                                  value: "ECO:0000269|PubMed:6208479",
                                  type: "EXPERIMENTAL"
                              },
                              {
                                  id: 0,
                                  attribute: {
                                      id: 0,
                                      value: "7599635"
                                  },
                                  evidenceCode: "ECO_0000269",
                                  typeValue: "PubMed",
                                  value: "ECO:0000269|PubMed:7599635",
                                  type: "EXPERIMENTAL"
                              },
                              {
                                  id: 0,
                                  attribute: {
                                      id: 0,
                                      value: "8227344"
                                  },
                                  evidenceCode: "ECO_0000269",
                                  typeValue: "PubMed",
                                  value: "ECO:0000269|PubMed:8227344",
                                  type: "EXPERIMENTAL"
                              },
                              {
                                  id: 0,
                                  attribute: {
                                      id: 0,
                                      value: "8299233"
                                  },
                                  evidenceCode: "ECO_0000269",
                                  typeValue: "PubMed",
                                  value: "ECO:0000269|PubMed:8299233",
                                  type: "EXPERIMENTAL"
                              },
                              {
                                  id: 0,
                                  attribute: {
                                      id: 0,
                                      value: "9361033"
                                  },
                                  evidenceCode: "ECO_0000269",
                                  typeValue: "PubMed",
                                  value: "ECO:0000269|PubMed:9361033",
                                  type: "EXPERIMENTAL"
                              }
                          ],
                          value: "An autosomal recessive disorder accounting for about 50% of non-X-linked SCIDs. SCID refers to a genetically and clinically heterogeneous group of rare congenital disorders characterized by impairment of both humoral and cell-mediated immunity, leukopenia, and low or absent antibody levels. Patients with SCID present in infancy with recurrent, persistent infections by opportunistic organisms. The common characteristic of all types of SCID is absence of T-cell-mediated cellular immunity due to a defect in T-cell development. ADA deficiency has been diagnosed in chronically ill teenagers and adults (late or adult onset). Population and newborn screening programs have also identified several healthy individuals with normal immunity who have partial ADA deficiency."
                      },
                      reference: {
                          diseaseReferenceType: "MIM",
                          diseaseReferenceId: {
                              value: "102700"
                          }
                      }
                  }
              ]
          }
      }
    }

    render() {
      return(
          <Router>
            <Header />
            <main>
              <div>
                <Routes>
                    <Route path={"/test"} element={<Test protein={this.state.protein}  />} />
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/dashboard"} element={<Dashboard />} />
                    <Route path={"/statistics"} element={<Statistics statistics={this.state.statistics}
                                                                     categories={this.state.categories} />} />
                    <Route path={"/notFound"} element={<NotFound errorMessage={this.errorMessage} />} />

                    <Route path={"/publications"} element={<Publications publications={this.state.publications}
                                                                    onAddPublicationSuggestion={this.addPublicationSuggestion}/>} />

                    <Route path={"/biologicalProcess"} element={<BiologicalProcessSearch
                        biologicalProcessAbstract={this.state.biologicalProcessAbstract}
                        onBiologicalProcessSearch={this.setBiologicalProcessName}/> }/>
                    <Route path={"/biologicalProcess/:name"} element={<BiologicalProcessDetails
                        biologicalProcessName={this.state.biologicalProcessName} />}/>

                    <Route path={"/chemicalSubstances"} element={<ChemicalSubstanceSearch
                        chemicalSubstanceAbstract={this.state.chemicalSubstanceAbstract}
                        onChemicalSubstanceSearch={this.setChemicalSubstanceName}/>} />
                    <Route path={"/chemicalSubstances/:name"} element={<ChemicalSubstanceDetails
                        onProteinSearch = {this.setProteinName}
                        chemicalSubstanceName={this.state.chemicalSubstanceName } /> } />

                    <Route path={"/disease"} element={<DiseaseSearch diseaseAbstract={this.state.diseaseAbstract}
                        onDiseaseSearch={this.setDiseaseName} /> } />
                    <Route path={"/disease/:name"} element={ <DiseaseDetails diseaseName={this.state.diseaseName}/> } />

                    <Route path={"/gene"} element={<GeneSearch geneAbstract={this.state.geneAbstract}
                        onGeneSearch={this.setGeneName}/>} />
                    <Route path={"/gene/:name"} element={<GeneDetails geneName={this.state.geneName} />} />

                    <Route path={"/molecularActivity"} element={<MolecularActivitySearch
                        molecularActivityAbstract={this.state.molecularActivityAbstract}
                        onMolecularActivitySearch={this.setMolecularActivityName} />}/>
                    <Route path={"/molecularActivity/:name"} element={<MolecularActivityDetails
                        molecularActivityName={this.state.molecularActivityName} />}/>

                    <Route path={"/protein"} element={<ProteinSearch proteinAbstract={this.state.proteinAbstract}
                        onProteinSearch={this.setProteinName}/> } />
                    <Route path={"/protein/:name"} element={<ProteinDetails proteinName={this.state.proteinName}  /> } />

                </Routes>
              </div>
            </main>
            <Footer/>
          </Router>
      )
    }

    componentDidMount() {
        this.loadCategories();
        this.loadPublicationsFromCategories()
        this.loadAbstractsForCategories();

    }

    loadCategories =()=>{
        CategoriesService.getAllCategories()
            .then((data)=>{
                this.setState({
                    categories : data.data
                })
                console.log(data.data)
            })
    }
    loadAbstractsForCategories=()=>{
        BiologicalProcessService.getBiologicalProcessAbstract()
            .then((data)=>{
                this.setState({
                    biologicalProcessAbstract : data.data
                })
            })
        ChemicalSubstanceService.getChemicalSubstanceAbstract()
            .then((data)=>{
                this.setState({
                    chemicalSubstanceAbstract : data.data
                })
            })
        DiseaseService.getDiseaseAbstract()
            .then((data)=>{
                this.setState({
                    diseaseAbstract : data.data
                })
            })

        MolecularActivityService.getMolecularActivityAbstract()
            .then((data)=>{
                this.setState({
                    molecularActivityAbstract : data.data
                })
            })
        ProteinService.getProteinAbstract()
            .then((data)=>{
                this.setState({
                    proteinAbstract : data.data
                })
            })
        GeneService.getGeneAbstract()
            .then((data)=>{
                this.setState({
                    geneAbstract : data.data
                })
            })
    }
    loadPublicationsFromCategories = ()=>{
        PublicationService.getAllPublicationsByCategory()
            .then((data)=>{
                this.setState({
                    publications : Object.entries(data.data)
                })
            })
    }
    addPublicationSuggestion =(name, authorsNames, url, description)=>{
        //console.log("Name: "+name +" authorsNames: " + authorsNames+" URL: "+url+" description: "+description)
        PublicationService.addPublicationSuggestion(name, authorsNames, url, description)
    }
    setBiologicalProcessName=(name)=>{
        this.setState({
            biologicalProcessName : name
        })
        console.log("name: "+name)
    }
    setChemicalSubstanceName=(name)=>{
        this.setState({
            chemicalSubstanceName : name
        })
    }
    setDiseaseName=(name)=>{
        this.setState({
            diseaseName : name
        })
    }
    setGeneName=(name)=>{
        this.setState({
            geneName : name
        })
    }
    setMolecularActivityName=(name)=>{
        this.setState({
            molecularActivityName : name
        })
    }
    setProteinName=(name)=>{
        this.setState({
            proteinName : name
        })
    }
}

export default App;