// import React from 'react';
import React, { useEffect, useState } from "react";
// import { Accordion, Card, Button } from 'react-bootstrap';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Table from "./table";
import "./style.scss";
import { getUserInfo } from "../utils/selectors";
import { useLazyFetchTonLimitQuery } from "../services/modules/portConservator/tonLimit";
function AccordionComponent() {
  const [
    fetchTonLimit,
    { data: data, isSuccess, isLoading, isFetching, error },
  ] = useLazyFetchTonLimitQuery();
 const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
 
  useEffect(() => {
    fetchAllTonLimit();
  }, []);
  const column = [
    { heading: "Sl.No", value: "serial-number", type: "row" },
    { heading: "Port Kadavu", value: "portId.port_name", type: "row" },
    { heading: "Zone Name", value: "zone.zone_name", type: "row" },
    { heading: "Balance Ton", value: "balance_ton", type: "row" },

  ];
  const handlePageChange = (page) => {
    setPage(page?.selected + 1);
    fetchAllTonLimit(searchText, page?.selected + 1);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    fetchAllTonLimit(value);
  };

  const fetchAllTonLimit = (searchParams, pageSelected) => {
    fetchTonLimit({ searchParams: searchParams, page: pageSelected });
  };

  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Spot Booking Instructions</Accordion.Header>
          <Accordion.Body>
            <Card>
              <div className="container">
                <div>
                  <ol>
                    <li>
                      {" "}
                      സ്പോട്ട് ബുക്കിംഗ് രെജിസ്ട്രേഷൻ സമയം 11.30 AM മുതൽ 4.30 PM
                      വരെ ആയിരിക്കും.
                    </li>
                    <li>
                      ഓൺലൈൻ പേയ്മെന്റ് സംവിധാനം വഴി മാത്രമേ സ്പോട് ബുക്കിങ്ങിന്
                      പണമടക്കാൻ സാധിക്കുകയുള്ളു.
                    </li>
                    <li>
                      സ്പോട്ട് ബുക്കിങ് വഴി മണൽ ലഭ്യമാക്കുന്നതിന് ആധാർ
                      നിര്ബന്ധമാണ് .
                    </li>
                    <li>
                      സ്പോട്ട് ബുക്കിങ്ങിൽ സമയത്തു നൽകുന്ന ആധാർ തന്നെ ആയിരിക്കണം
                      മണൽ എടുക്കുന്ന സമയത് കൊണ്ടുവരേണ്ടത് അല്ലാത്തപക്ഷം ആ
                      ബുക്കിങ് നിരസിക്കുന്നതാണ്.
                    </li>
                    <li>
                      ആരെങ്കിലും കാരണവശാൽ സ്പോട് ബുക്കിങ് നിരസിക്കുകയാണെങ്കിൽ
                      500 രൂപ കുറച്ച ബാക്കി തുക മാത്രമേ തിരിക ലഭിക്കുകയുള്ളു.
                    </li>
                    <li>
                      തിരികെ തുക ലഭ്യമാക്കുന്നതിന് അതാത് പോർട്ട് ഓഫീസിൽ അപേക്ഷ
                      നൽകേണ്ടതാണ്.
                    </li>
                    <li>
                      സ്‌പോർട്ട് ഓഫീസർ അപേക്ഷ പരിശോധിച്ചതിന് ശേഷം അർഹമായ തുക
                      ഉപഭോക്താവ് ടി തുക അടയ്ക്കുന്നതിന് ഉപയോഗിച്ച അക്കൗണ്ടിലേക്
                      നിക്ഷേപിക്കുന്നതാണ്.
                    </li>
                    <li>
                      സ്‌പോർട്ട് ബുക്കിംഗ് വഴി മണൽ ലഭ്യമാക്കുന്നതിന് നൽകുന്ന
                      മൊബൈൽ നമ്പർ ഒരിക്കൽ അപേക്ഷിച്ചു കഴിഞ്ച്ചാൽ പിന്നെ അതെ
                      മൊബൈൽ നമ്പർ രണ്ടു ദിവസത്തിന് ശേഷം മാത്രമേ നല്കാൻ പാടുള്ളു
                      അല്ലാത്ത പക്ഷം അപേക്ഷ നിരസിക്കുന്നതാണ്
                    </li>
                  </ol>
                </div>
              </div>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Port wise allotted ton for spot booking
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <Table data={data?.data ? data?.data : []} column={column}  />
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
