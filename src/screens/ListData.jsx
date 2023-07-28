import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ContainerSafeArea from "../components/ContainerSafeArea";
import DeleteModal from "../components/DeleteModal";
import Flex from "../components/Flex";
import Loader from "../components/Loader";
import { deleteUser, getUsers } from "../services/UserController";

const trash = require("../../assets/icons/trash.png");
const edit = require("../../assets/icons/edit.png");
const user = require("../../assets/icons/user.png");

const ListData = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [userItem, setUserItem] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = (item) => {
    setUserItem(item);
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  const handleDeleteItem = async () => {
    const status = await deleteUser(userItem.id);
    setIsOpenDeleteModal(!isOpenDeleteModal);

    Alert.alert(status);

    fetchData();
  };

  const handleNavigateToEdit = (item) => {
    navigation.navigate("EditUserScreen", {
      data: item,
    });
  };

  const onRefresh = async () => {
    setIsRefreshing(true);

    try {
      await fetchData();
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
    }

    setIsRefreshing(false);
  };

  const renderItem = ({ item }) => {
    return (
      <Flex style={card.container}>
        <View style={card.card}>
          <Image style={card.userIcon} source={user} alt="user-icon" />

          <Flex>
            <Flex style={card.idText}>
              <View style={card.card_title}>
                <Text>Nome:</Text>
                <Text>{item.name + " " + item.lastName}</Text>
              </View>

              <View style={card.card_subtitle}>
                <Text>CPF:</Text>
                <Text>{item.document}</Text>
              </View>

              <View style={card.card_subtitle}>
                <Text>E-mail:</Text>
                <Text>{item.email}</Text>
              </View>

              <View style={card.card_subtitle}>
                <Text>Gênero:</Text>
                <Text>
                  {item.gender === "male"
                    ? "Masculino"
                    : item.gender === "female"
                    ? "Feminino"
                    : "Outros"}
                </Text>
              </View>
            </Flex>

            <View style={card.actions}>
              <TouchableOpacity onPress={() => handleNavigateToEdit(item)}>
                <Image style={card.icon} source={edit} alt="user-icon" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleOpenDeleteModal(item)}>
                <Image style={card.icon} source={trash} alt="user-icon" />
              </TouchableOpacity>
            </View>
          </Flex>
        </View>
      </Flex>
    );
  };

  const ItemSeparator = () => <View style={{ marginVertical: 2 }} />;

  const fetchData = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error("ERRO: ", err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContainerSafeArea>
      <View style={styles.container}>
        {users?.length == 0 && (
          <Text style={styles.title}>Nenhum Registro</Text>
        )}

        <FlatList
          data={users}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              tintColor="#007bff"
              title="Atualizando lista..."
              style={{ color: "#404040" }}
            />
          }
          ItemSeparatorComponent={ItemSeparator}
          contentContainerStyle={styles.flatList}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <DeleteModal
        isOpen={isOpenDeleteModal}
        setIsOpen={setIsOpenDeleteModal}
        label_cancel="Não, cancelar"
        label_confirmAction="Sim, excluir"
        title_modal={`Deseja Deletar "${userItem.name}"`}
        onPress={() => handleDeleteItem()}
      />
      
      <Loader isOpen={isLoading} setIsOpen={setIsLoading} />
    </ContainerSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    marginVertical: 10,
  },
  flatList: {
    paddingBottom: 10,
  },
  lineData: {
    minWidth: "100%",
    padding: 12,
    // flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#dcf3ff",
  },
  textItem: {
    color: "#404040",
    fontSize: 16,
  },
  icon: {
    width: 32,
    height: 32,
  },
});

const card = StyleSheet.create({
  container: {
    minWidth: "100%",
    maxW: "100%",
    overflow: "hidden",
    gap: 6,
    marginVertical: 6,
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    padding: 12,
    borderRadius: 14,
    flexDirection: "row",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  idText: {
    gap: 6,
    alignItems: "flex-start",
    flexDirection: "column",
  },
  card: {
    gap: 10,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  card_title: {
    flexDirection: "row",
    gap: 4,
  },
  card_subtitle: {
    flexDirection: "row",
    gap: 6,
  },
  userIcon: {
    width: 42,
    height: 42,
  },
  icon: {
    width: 24,
    height: 24,
  },
  actions: {
    flex: 0.85,
    gap: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default ListData;
